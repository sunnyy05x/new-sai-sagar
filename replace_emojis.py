import os

HTML_FILES = [
    "admin/index.html",
    "customer/index.html",
    "kitchen/index.html",
    "counter/index.html",
    "index.html"
]

mapping = {
    # Nav/Tabs/Headers
    "📊": "<i data-lucide=\"layout-dashboard\"></i>",
    "📋": "<i data-lucide=\"file-text\"></i>",
    "🪑": "<i data-lucide=\"grid\"></i>",
    "📱": "<i data-lucide=\"smartphone\"></i>",
    "📦": "<i data-lucide=\"package\"></i>",
    "💰": "<i data-lucide=\"dollar-sign\"></i>",
    "⚙️": "<i data-lucide=\"settings\"></i>",
    "💾": "<i data-lucide=\"save\"></i>",
    "👨‍🍳": "<i data-lucide=\"chef-hat\"></i>",
    
    # Customer
    "🛒": "<i data-lucide=\"shopping-cart\"></i>",
    "🛎️": "<i data-lucide=\"bell\"></i>",
    "⭐": "<i data-lucide=\"star\"></i>",
    
    # Kitchen
    "🔊": "<i data-lucide=\"volume-2\"></i>",
    "🔇": "<i data-lucide=\"volume-x\"></i>",
    "🔔": "<i data-lucide=\"bell-ring\"></i>",
    "🔥": "<i data-lucide=\"flame\"></i>",
    "⏱": "<i data-lucide=\"timer\"></i>",
    "⏳": "<i data-lucide=\"hourglass\"></i>",
    
    # Actions
    "➕": "<i data-lucide=\"plus\"></i>",
    "➖": "<i data-lucide=\"minus\"></i>",
    "✏️": "<i data-lucide=\"edit-2\"></i>",
    "🗑️": "<i data-lucide=\"trash-2\"></i>",
    "🔍": "<i data-lucide=\"search\"></i>",
    "✅": "<i data-lucide=\"check-circle\"></i>",
    "❌": "<i data-lucide=\"x-circle\"></i>",
    "📝": "<i data-lucide=\"edit\"></i>",
    "📭": "<i data-lucide=\"inbox\"></i>",
    "🌿": "<i data-lucide=\"leaf\"></i>",
    
    # Food (general UI ones, not from data.js)
    "🍳": "<i data-lucide=\"cooking-pot\"></i>",
    "🍽": "<i data-lucide=\"utensils\"></i>",
    
    # Others
    "📞": "<i data-lucide=\"phone\"></i>",
    "🧾": "<i data-lucide=\"receipt\"></i>",
    "ℹ": "<i data-lucide=\"info\"></i>"
}

# The lucide script to inject
LUCIDE_SCRIPT = '<script src="https://unpkg.com/lucide@latest"></script>'

for file_path in HTML_FILES:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    for emoji, icon_html in mapping.items():
        content = content.replace(emoji, icon_html)
        
    # Inject lucide script before closing body if not present
    if LUCIDE_SCRIPT not in content:
        content = content.replace("</body>", f"  {LUCIDE_SCRIPT}\n</body>")
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Updated HTML files with Lucide icons.")
