import requests
from unshortenit import UnshortenIt


#get the url from user

def make_rte:
while True:
updates = requests.get("https://api.telegram.org/bot857617376:AAFX-IATq2rEKPsKcW7ylkhe_pA7jOZZeK0/getUpdates")
updates = updates["result"]
                   
 message = item["message"]["text"]
 unshortener = UnshortenIt() 
 uri = unshortener.unshorten(message)
 print(url)
 requests.get("https://api.telegram.org/bot857617376:AAFX-IATq2rEKPsKcW7ylkhe_pA7jOZZeK0/sendMessage?chat_id=478322885&text={}".format(message))

make_rte()
