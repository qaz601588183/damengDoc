import cacheIcon from "../assets/cache.png";
import dbIcon from "../assets/db.png";
import stIcon from "../assets/st.png";
import sxIcon from "../assets/sx.png";
import wdIcon from "../assets/wd.png";

// 产品分类配置
export const productCategories = [
  { key: "database", name: "数据库" },
  { key: "integrated", name: "一体机" },
  { key: "tools", name: "生态工具" },
  { key: "cloud", name: "云计算" },
  { key: "bigdata", name: "大数据" },
  { key: "ai", name: "人工智能" },
];

// 内容区域配置（用于数据库分类标题）
export const contentSections = [
  {
    key: "relational",
    title: "关系型数据库",
  },
  {
    key: "nonRelational",
    title: "非关系型数据库",
  },
];

// 产品数据配置
export const productData = {
  database: {
    relational: [
      {
        id: 1,
        title: "达梦数据库管理系统DM",
        name: "达梦数据库管理系统DM",
        description:
          "100%自主研发的大型通用关系型数据库，支持单机/主备、共享集群、分布式等多种部署方式，覆盖OLAP/OLTP/HTAP交易分析混合负载场景，为用户提供具备极致事宜性、高可用性、高可靠性、高安全性及易用性的企业级数据库产品与服务。",
        icon: dbIcon,
        featured: true, // 标记为特色产品，显示大卡片
      },
    ],
    nonRelational: [
      {
        id: 1,
        title: "蜀天梦图数据库GDMBASE",
        name: "蜀天梦图数据库GDMBASE",
        description: "自研分布式原生图数据库",
        icon: stIcon,
      },
      {
        id: 2,
        title: "达梦缓存数据库DMCDM",
        name: "达梦缓存数据库DMCDM",
        description: "适用于缓存热点数据、提升数据访问性能",
        icon: cacheIcon,
      },
      {
        id: 3,
        title: "达梦时序数据库DMDDM",
        name: "达梦时序数据库DMDDM",
        description: "独立研发的分布式原生时序数据库产品",
        icon: sxIcon,
      },
      {
        id: 4,
        title: "达梦文档数据库DMTDM",
        name: "达梦文档数据库DMTDM",
        description: "支持结构化、半结构和非结构化数据",
        icon: wdIcon,
      },
    ],
  },
  integrated: {
    relational: [],
    nonRelational: [
      {
        id: 1,
        title: "蜀天梦图数据库GDMBASE",
        name: "蜀天梦图数据库GDMBASE",
        description: "自研分布式原生图数据库",
        icon: stIcon,
      },
      {
        id: 2,
        title: "达梦缓存数据库DMCDM",
        name: "达梦缓存数据库DMCDM",
        description: "适用于缓存热点数据，提升数据访问性能",
        icon: cacheIcon,
      },
      {
        id: 3,
        title: "达梦时序数据库DMTDM",
        name: "达梦时序数据库DMTDM",
        description: "独立研发的分布式原生时序数据库产品",
        icon: sxIcon,
      },
      {
        id: 4,
        title: "达梦文档数据库DMDDM",
        name: "达梦文档数据库DMDDM",
        description: "支持结构化、半结构和非结构化数据",
        icon: wdIcon,
      },
    ],
  },
  tools: {
    customSections: [
      {
        key: "dmdf",
        title: "达梦数+数据融合软件DMDF",
        hasLink: true,
        items: [
          {
            id: 1,
            title: "达梦数据复制软件DMDRS",
            name: "达梦数据复制软件DMDRS",
            description: "异构数据库类型到数据复制迁移",
            icon: dbIcon,
          },
          {
            id: 2,
            title: "达梦数据集成软件DMDIS",
            name: "达梦数据集成软件DMDIS",
            description: "实现各类数据的清洗转换整合",
            icon: dbIcon,
          },
          {
            id: 3,
            title: "达梦数据校验软件DMDVS",
            name: "达梦数据校验软件DMDVS",
            description: "快速实现数据—致性校验与修复",
            icon: dbIcon,
          },
          {
            id: 4,
            title: "达梦数据融合管理平台DMDFM",
            name: "达梦数据融合管理平台DMDFM",
            description: "数据融合管理、监控运维、故障处理",
            icon: dbIcon,
          },
        ],
      },
      {
        key: "sqlark",
        title: "SQLark百灵连接",
        items: [
          {
            id: 1,
            title: "百灵连接SQLark",
            name: "百灵连接SQLark",
            description: "多数据库支持 | SQL开发 | 数据生成...",
            icon: dbIcon,
          },
        ],
      },
    ],
  },
  cloud: {
    relational: [
      {
        id: 1,
        title: "达梦启云数据库云服务系统DMCDB",
        name: "达梦启云数据库云服务系统DMCDB",
        description: "弹性伸缩极简云原生数据库",
        icon: dbIcon,
      },
      {
        id: 2,
        title: "达梦启云云开放平台DMCOP",
        name: "达梦启云云开放平台DMCOP",
        description: "面向云原生应用的一体化全域PaaS平台",
        icon: dbIcon,
      },
      {
        id: 3,
        title: "达梦启云混合云管平台DMMCP",
        name: "达梦启云混合云管平台DMMCP",
        description: "更高效的混合云管理和优化服务",
        icon: dbIcon,
      },
    ],
    nonRelational: [
      {
        id: 4,
        title: "达梦云原生信创适配平台DMXCP",
        name: "达梦云原生信创适配平台DMXCP",
        description: "企业级信创环境，信创适配无忧",
        icon: dbIcon,
      },
    ],
  },
  bigdata: {
    customSections: [
      {
        key: "collection",
        title: "数据采集",
        items: [
          {
            id: 1,
            title: "达梦物联网平台DMThings",
            name: "达梦物联网平台DMThings",
            description: "一站式物联网设备管理&运维",
            icon: dbIcon,
          },
          {
            id: 2,
            title: "达梦数据报表平台软件DMReport",
            name: "达梦数据报表平台软件DMReport",
            description: "通用型数据采集应用平台",
            icon: dbIcon,
          },
        ],
      },
      {
        key: "storage",
        title: "数据存储",
        items: [
          {
            id: 1,
            title: "达梦启云云原生大数据平台DMQYCDP",
            name: "达梦启云云原生大数据平台DMQYCDP",
            description: "坚实的大数据基座支撑能力",
            icon: dbIcon,
          },
        ],
      },
      {
        key: "governance",
        title: "数据治理",
        items: [
          {
            id: 1,
            title: "达梦启智数据治理平台DMQZDMAN",
            name: "达梦启智数据治理平台DMQZDMAN",
            description: "数据全生命周期治理&应用",
            icon: dbIcon,
          },
        ],
      },
      {
        key: "application",
        title: "数据应用",
        items: [
          {
            id: 1,
            title: "达梦启智商业智能软件DMQZBI",
            name: "达梦启智商业智能软件DMQZBI",
            description: "数据在线复杂查询及分析的自助式BI工具",
            icon: dbIcon,
          },
          {
            id: 2,
            title: "达梦启智大数据可视化系统DMQZDV",
            name: "达梦启智大数据可视化系统DMQZDV",
            description: `0代码"轻松实现可视化页面设计"`,
            icon: dbIcon,
          },
          {
            id: 3,
            title: "达梦启智大数据分析系统DMQZIA",
            name: "达梦启智大数据分析系统DMQZIA",
            description: "全能型数据分析处理和数据挖掘",
            icon: dbIcon,
          },
          {
            id: 4,
            title: "达梦时空大数据平台DMGeoDMS",
            name: "达梦时空大数据平台DMGeoDMS",
            description: "空间数据与空间服务资源管理",
            icon: dbIcon,
          },
        ],
      },
    ],
  },
  ai: {
    relational: [
      {
        id: 1,
        title: "数据库自诊断调优平台",
        name: "数据库自诊断调优平台",
        description: "空间数据与空间服务资源管理",
        icon: dbIcon,
      },
    ],
    nonRelational: [],
  },
};
