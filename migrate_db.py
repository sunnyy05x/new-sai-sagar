import urllib.request
import urllib.parse
import json

URL = "https://uvvfbtkhhruxyzonrnnw.supabase.co/rest/v1/menu"
HEADERS = {
    "apikey": "sb_publishable_kY1kjb5dQ4QYQvWNKWsPFw_nnZZySt9",
    "Authorization": "Bearer sb_publishable_kY1kjb5dQ4QYQvWNKWsPFw_nnZZySt9",
    "Content-Type": "application/json"
}

mapping = {
    "🍚": "soup",
    "🫓": "utensils-crossed",
    "🧋": "cup-soda",
    "🍽️": "utensils",
    "🍧": "cake",
    "🍨": "cake",
    "🧃": "glass-water",
    "🥘": "soup",
    "🍛": "soup",
    "🍦": "cake",
    "🥪": "sandwich",
    "🥤": "cup-soda"
}

req = urllib.request.Request(URL, headers=HEADERS)
with urllib.request.urlopen(req) as response:
    menu = json.loads(response.read().decode())

print(f"Updating {len(menu)} items...")
count = 0
for item in menu:
    emoji = item.get("emoji", "")
    if emoji in mapping:
        new_icon = mapping[emoji]
        item_id = urllib.parse.quote(item['id'])
        patch_url = f"{URL}?id=eq.{item_id}"
        patch_req = urllib.request.Request(patch_url, data=json.dumps({"emoji": new_icon}).encode("utf-8"), headers=HEADERS, method="PATCH")
        try:
            urllib.request.urlopen(patch_req)
            count += 1
        except Exception as e:
            print(f"Error updating item {item['id']}: {e}")
            
print(f"Successfully updated {count} items in the database.")
