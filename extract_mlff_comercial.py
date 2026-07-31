"""
Extrai o index_with_ids.html (com IDs de traducao) para estrutura multi-arquivo:
  mlff-comercial/
  |-- index.html
  |-- css/styles.css
  |-- js/main.js
  |-- js/i18n.js   (ja existe, nao sobrescreve)
  |-- assets/
      |-- images/  (JPEGs)
      |-- video/   (MP4s)
"""
import os, re, base64, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

BASE = 'C:/Users/ingri/OneDrive/Documentos/Projetos/AIVX - Institucional/mlff-comercial'
SRC  = os.path.join(BASE, 'index_with_ids.html')

# -- criar pastas -------------------------------------------------------
for d in ['css', 'js', 'assets/images', 'assets/video']:
    os.makedirs(os.path.join(BASE, d), exist_ok=True)

with open(SRC, 'r', encoding='utf-8') as f:
    html = f.read()

print(f'Lido: {len(html):,} chars')

# -- 1. EXTRAIR CSS -----------------------------------------------------
m_style = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
if not m_style:
    raise RuntimeError('Style block not found')

css_content = m_style.group(1)
css_path = os.path.join(BASE, 'css', 'styles.css')
with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)
print(f'CSS: {len(css_content):,} chars -> css/styles.css')

html = html[:m_style.start()] + '<link rel="stylesheet" href="css/styles.css">' + html[m_style.end():]

# -- 2. EXTRAIR JS ------------------------------------------------------
m_script = re.search(r'<script>(.*?)</script>', html, re.DOTALL)
if not m_script:
    raise RuntimeError('Inline script block not found')

js_content = m_script.group(1)

# Expor ARCH_STEPS, archGetCurrent e archGoTo no window para o i18n.js
# archCurrent e declarado como 'let' internamente no script
expose = """
/* -- expostos para i18n.js -- */
window.ARCH_STEPS = ARCH_STEPS;
window.archGetCurrent = function() { return archCurrent; };
window.archGoTo = function(step) { archGoTo(step); };
"""
js_content = js_content + expose

js_path = os.path.join(BASE, 'js', 'main.js')
with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
print(f'JS: {len(js_content):,} chars -> js/main.js')

html = html[:m_script.start()] + '<script src="js/main.js"></script>' + html[m_script.end():]

# -- 3. EXTRAIR IMAGENS HTML --------------------------------------------
img_counter = [0]

def replace_image(m):
    mime = m.group(1)
    data_b64 = m.group(2)
    raw = base64.b64decode(data_b64)

    ext_map = {
        'image/jpeg': 'jpg', 'image/png': 'png',
        'image/gif': 'gif',  'image/webp': 'webp',
        'image/svg+xml': 'svg',
    }
    ext = ext_map.get(mime, 'bin')

    img_counter[0] += 1
    fname = f'img{img_counter[0]:03d}.{ext}'
    fpath = os.path.join(BASE, 'assets', 'images', fname)
    with open(fpath, 'wb') as f:
        f.write(raw)

    size_kb = len(raw) // 1024
    print(f'  image {img_counter[0]:03d}: {fname} ({size_kb} KB)')
    return f'assets/images/{fname}'

html = re.sub(
    r'data:(image/[a-zA-Z0-9+.]+);base64,([A-Za-z0-9+/=\n]+)',
    replace_image,
    html
)
print(f'Total imagens HTML: {img_counter[0]}')

# -- 3b. EXTRAIR IMAGENS DO main.js (ARCH_STEPS eqImg/appImg) ----------
with open(js_path, 'r', encoding='utf-8') as f:
    js_content2 = f.read()

def replace_image_js(m):
    mime = m.group(1)
    data_b64 = m.group(2)
    raw = base64.b64decode(data_b64)
    ext_map = {'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp'}
    ext = ext_map.get(mime, 'jpg')
    img_counter[0] += 1
    fname = f'img{img_counter[0]:03d}.{ext}'
    fpath = os.path.join(BASE, 'assets', 'images', fname)
    with open(fpath, 'wb') as f:
        f.write(raw)
    size_kb = len(raw) // 1024
    print(f'  [JS] image {img_counter[0]:03d}: {fname} ({size_kb} KB)')
    return f'assets/images/{fname}'

js_content2 = re.sub(
    r'data:(image/[a-zA-Z0-9+.]+);base64,([A-Za-z0-9+/=\n]+)',
    replace_image_js,
    js_content2
)
with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content2)
print(f'Total imagens (HTML + JS): {img_counter[0]}')

# -- 4. EXTRAIR VIDEOS --------------------------------------------------
vid_counter = [0]

def replace_video(m):
    mime = m.group(1)
    data_b64 = m.group(2)
    raw = base64.b64decode(data_b64)

    ext_map = {'video/mp4': 'mp4', 'video/webm': 'webm', 'video/ogg': 'ogv'}
    ext = ext_map.get(mime, 'mp4')

    vid_counter[0] += 1
    fname = f'video{vid_counter[0]:02d}.{ext}'
    fpath = os.path.join(BASE, 'assets', 'video', fname)
    with open(fpath, 'wb') as f:
        f.write(raw)

    size_mb = len(raw) / 1024 / 1024
    print(f'  video {vid_counter[0]:02d}: {fname} ({size_mb:.1f} MB)')
    return f'assets/video/{fname}'

html = re.sub(
    r'data:(video/[a-zA-Z0-9+.]+);base64,([A-Za-z0-9+/=\n]+)',
    replace_video,
    html
)
print(f'Total videos: {vid_counter[0]}')

# -- 5. VERIFICAR QUE NAO SOBROU BASE64 ---------------------------------
remaining = re.findall(r'data:[a-z]+/[a-z0-9+.]+;base64,', html)
if remaining:
    print(f'[WARN] data URIs remanescentes: {remaining}')
else:
    print('OK -- zero data URIs remanescentes')

# -- 6. ESCREVER index.html LIMPO ---------------------------------------
out_path = os.path.join(BASE, 'index.html')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(html)

print(f'\nindex.html: {len(html):,} chars -> {out_path}')
print('Extracao concluida.')
