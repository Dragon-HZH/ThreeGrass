import Mock from "mockjs"
const baseUrl = "http://sancao.com:3000"

// logo图片
const nav = {
    "log": require("../assets/logo.png"),
    "menu-t": require("../assets/menu-t.png"),
    "menu-ts": require("../assets/menu-ts.png"),
    "menu": [
        {
            "title": "全系产品",
            "list": [
                "明星产品",
                "当即热销",
                "肌肤需求",
                "美肤步骤",
                "产品系列",
                "畅销渠道"
            ]
        }, {
            "title": "品牌相关",
            "list": [
                "品牌故事",
                "品牌理念",
                "品牌大事",
                "护肤理念"
            ]
        }, {
            "title": "媒体中心",
            "list": [
                "新闻动态",
                "使用分享"
            ]
        }, {
            "title": "招商加盟",
            "list": [
                "实体店加盟",
            ]
        }, {
            "title": "公司简介",
            "list": [
                "了解遇美",
                "企业荣誉",
                "企业文化",
                "联系我们",
            ]
        }
    ]
}
const foot = {
    "top": require("../assets/by.png"),
    "list": [
        {
            "title": " 联系我们",
            "pic": require("../assets/j1.png"),
            "url": "http://m.saselomo.com/list-29.html"
        }, {
            "title": " 在线咨询",
            "pic": require("../assets/j2.png"),
            "url": "/"
        }, {
            "title": " 天猫旗舰店",
            "pic": require("../assets/j3.png"),
            "url": "https://saselomo.m.tmall.com/?ajson=1&parentCatId=0&user_id=3105888419&ali_trackid=2%3Amm_31680474_543850195_108986000183%3A1574332446_132_406528471&e=WNXdcN6lek_J985xTGVg_xkuTwMkXecMiOh97xZaDI_6I_6qONXdke9lW9ELcytnEfaJVyQoQEVCmD4Y-ww8xC_IAR7ok-np8sviUM61dt2ets13tuMieKbkLgdEKZh3fSOC8LoA4emxU3O4DBBBTqOG7bBOsI7xBHWXHGYcetYtwdmaYzj4c5C1NySQ0cEKtaRcFUcLtvaMa7Xj7iOY8c1W4TUr2ZI7lF30rcMjoRZ3Exup-2-iREUauwZE_R1pomfkDJRs-hU&type=2&tk_cps_param=31680474&tkFlag=0&tk_cps_ut=2"
        }, {
            "title": " 京东商城",
            "pic": require("../assets/j4.png"),
            "url": "https://shop.m.jd.com/?shopId=710158&cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1000192282_&utm_term=072b374b789d44f5bb4b3bb1cf21a186"
        }
    ]
}
const bodys = {
    "first": [
        [require("../assets/015.jpg")],
        [require("../assets/02.jpg")],
        [require("../assets/01.jpg"), require("../assets/03.jpg")],
        [require("../assets/04.jpg")],
    ],
    "second": {
        "title": '明星产品',
        'url': require("../assets/ks.png"),
        'hg': require("../assets/hg.png"),
        "list": [
            {
                "pic": require("../assets/012.jpg"),
                "ts": '补水透亮面膜',
                'money': '￥108',
                'toT':"https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-16851815761.158.7a6c49b5ISX5Ip&id=547708599427&rn=3f3f916f1c033982fdaa994ed4b41d28&abbucket=13",
                'toJ':'https://item.jd.com/32506149150.html'
            }, {
                "pic": require("../assets/013.jpg"),
                "ts": '净净大白瓶',
                'money': '￥198',
                'toT': 'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-16851815761.98.7a6c49b5ISX5Ip&id=549495089617&rn=3f3f916f1c033982fdaa994ed4b41d28&abbucket=13',
                'toJ': 'https://item.jd.com/25835928779.html',
            }, {
                "pic": require("../assets/010.jpg"),
                "ts": '防晒冰机套装',
                'money': '￥238',
                'toT':"https://saselomo.tmall.com/search.htm?spm=a220o.1000855.w5001-17136065619.3.5ec29f124frVFu&search=y&scene=taobao_shop",
                'toJ':'https://saselomo.jd.com/view_search-717355-714450-710158-0-0-0-0-1-1-60.html?isGlobalSearch=0'
            }
        ]
        ,'mx':'http://m.saselomo.com/list-52.html'
    },
    'three': {
        "title": '当季热销',
        "text": "找到肌肤的完美护理方案",
        "list": [
            {
                'url': require('../assets/09.jpg'),
                'title': '美白限量礼盒',
                'text': '四季绽放焕彩亮肤'
            }, {
                'url': require('../assets/06.jpg'),
                'title': '极之兰补水面膜',
                'text': ' 岂止于润 水润尽享'
            }, {
                'url': require('../assets/07.jpg'),
                'title': '舒安健康水套装',
                'text': '亚健康肌肤修护专家'
            }, {
                'url': require('../assets/08.jpg'),
                'title': '舒安修护霜',
                'text': '让肌肤安静下来'
            }
        ],
        'rx':'http://m.saselomo.com/list-11.html'
    }
}

const data = {
    nav, foot, bodys
};

Mock.mock(baseUrl + "/api/test", "get", data)

export default Mock;