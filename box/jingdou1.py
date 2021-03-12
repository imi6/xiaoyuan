from telethon import TelegramClient, events
import requests, re

api_id = ''
api_hash = '1e69dd8b868c0b79b9c3e786d714a07d'
output_msg = False # 是否打印消息
channel_white_list = [1212172599] # 过滤频道消息
cookies = [
        "",
        ""
        ]

regex = re.compile(r"(https://api.m.jd.com.*)\)", re.M)

client = TelegramClient(
        'your session id',
        api_id,
        api_hash,
   
        )

headers = {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1",
        "Cookie": "",
        }

def get_bean(url):
    for cookie in cookies:
        headers["Cookie"] = cookie
        res = requests.get(url, headers=headers).json()
        if int(res['code']) != 0:
            print("cookie无效")
        else:
            print(res['data']['awardTitle'], res['data']['couponQuota'])


@client.on(events.NewMessage)
async def my_event_handler(event):
    if event.peer_id.channel_id not in channel_white_list :
        return
    jdUrl = re.findall(regex, event.message.text)
    if output_msg:
        print(event.message.text)
    if len(jdUrl) == 1:
        get_bean(jdUrl[0])

with client:
    client.loop.run_forever()

