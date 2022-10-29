// 配置
window.Config = {

  // 站点名
  SiteName: 'MineMTR服务器状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm792948911-f22ed4c30e33afcfc5f62dc6',
    'm792949088-9877bd829e0f229cd3d8fad2',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '加入服务器官方QQ群',
      url: 'https://qm.qq.com/cgi-bin/qm/qr?k=NDhum6MbaGg79L93onQ7HH6GIOjGqTVE&jump_from=webapi&authKey=R1iCkX5hSLPJbltDKbQmg65wzdUUPgoLgoSbddUACTLCBxUU9Zbgeyota/eV21o6'
    },
    {
      text: '博客主页',
      url: 'https://mike-brown8.github.io/'
    },
  ],
};
