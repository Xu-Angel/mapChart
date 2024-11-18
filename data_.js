const getData = (len = 7) => {
  let data = {
    nodes: [],
    edges: [],
  }
  let num = new Array(len).fill(1)
  num.length = len
  num.forEach((i) => {
    console.log(i, 'i')
    const k = Math.random() * Math.random() + i
    data.nodes.push(
      ...[
        {
          id: `${k}jiqi`,
          label: '机器',
          type: 'rect',
        },
        {
          id: `${k}xinyongka`,
          label: '信用卡',
          type: 'rect',
        },
        {
          id: `${k}guimianxitongOne`,
          label: '柜面系统',
        },
        {
          id: `${k}tongyiappOne`,
          label: '统一APP系统',
        },
        {
          id: `${k}ESBOne`,
          label: 'ESB',
        },
        {
          id: `${k}zhengxinxitongOne`,
          label: '征信系统',
        },
        {
          id: `${k}ESBTwo`,
          label: 'ESB',
        },
        {
          id: `${k}xindaixitongOne`,
          label: '信贷系统',
        },
        {
          id: `${k}ESBThree`,
          label: 'ESB',
        },
        {
          id: `${k}hexinjiaoyixiotngOne`,
          label: '核心交易系统',
        },

        //2
        {
          id: `${k}tongyiappTwo`,
          label: '统一APP系统',
        },
        {
          id: `${k}ESBFour`,
          label: 'ESB',
        },
        {
          id: `${k}hexinjiaoyixiotngTwo`,
          label: '核心交易系统',
        },
        {
          id: `${k}ESBFive`,
          label: 'ESB',
        },
        {
          id: `${k}guojizhifuOne`,
          label: '国际信用卡',
        },
        {
          id: `${k}chaojiwangyingOne`,
          label: '超级网银',
        },
        {
          id: `${k}ESBSIX`,
          label: 'ESB',
        },
        {
          id: `${k}yinglianqinazhiOne`,
          label: '银联前置',
        },
        {
          id: `${k}wulianxitongOne`,
          label: '物联系统',
        },
        {
          id: `${k}guimianxitongTwo`,
          label: '柜面系统',
        },
      ]
    )
    data.edges.push(
      ...[
        {
          source: `${k}xinyongka`,
          target: `${k}tongyiappTwo`,
        },
        {
          source: `${k}xinyongka`,
          target: `${k}wulianxitongOne`,
        },
        {
          source: `${k}xinyongka`,
          target: `${k}guimianxitongTwo`,
        },
        {
          source: `${k}tongyiappTwo`,
          target: `${k}ESBFour`,
        },
        {
          source: `${k}guimianxitongTwo`,
          target: `${k}ESBFour`,
        },
        {
          source: `${k}ESBFour`,
          target: `${k}hexinjiaoyixiotngTwo`,
        },
        {
          source: `${k}hexinjiaoyixiotngTwo`,
          target: `${k}ESBFive`,
        },
        {
          source: `${k}ESBFive`,
          target: `${k}guojizhifuOne`,
        },
        {
          source: `${k}ESBFive`,
          target: `${k}chaojiwangyingOne`,
        },
        {
          source: `${k}chaojiwangyingOne`,
          target: `${k}ESBSIX`,
        },
        {
          source: `${k}ESBSIX`,
          target: `${k}yinglianqinazhiOne`,
        },
        //1jiqi
        {
          source: `${k}jiqi`,
          target: `${k}guimianxitongOne`,
        },
        {
          source: `${k}jiqi`,
          target: `${k}tongyiappOne`,
        },
        {
          source: `${k}tongyiappOne`,
          target: `${k}ESBOne`,
        },
        {
          source: `${k}guimianxitongOne`,
          target: `${k}ESBOne`,
        },
        {
          source: `${k}ESBOne`,
          target: `${k}zhengxinxitongOne`,
        },
        {
          source: `${k}zhengxinxitongOne`,
          target: `${k}ESBTwo`,
        },
        {
          source: `${k}ESBTwo`,
          target: `${k}xindaixitongOne`,
        },
        {
          source: `${k}xindaixitongOne`,
          target: `${k}ESBThree`,
        },
        {
          source: `${k}ESBThree`,
          target: `${k}hexinjiaoyixiotngOne`,
        },
      ]
    )
  })
  console.log(num, data, 'data')
  return data
}
window.data = getData()
const data = {
  nodes: [
    //节点数组，x,y的生成则自己根据图上的坐标位置来生成，根据图的左下角为坐标原点开始计算
    {
      id: 'line1-1', //节点的id，全局唯一，生成规则： line+路线序号+节点序号，如'line1-1'为路线1的第一个节点的id，则'line1-2'为路线1的第二个节点的id
      label: 1, //节点的名称
      x: '', //节点的X坐标
      y: '', //节点的Y坐标
    },
    // 按照格式一一梳理出来
  ],
  edges: [
    {
      // 描述节点间边的关系， 这个对象表示路线1的第一个节点到路线1的第二个节点的边
      source: 'line1-1', // 边的起始点
      target: 'line1-2', // 边的目标点
    },
  ],
}
