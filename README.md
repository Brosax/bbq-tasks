# BBQ任务分配工具 - 部署指南

## 快速开始

### 步骤1：创建Firebase项目

1. 访问 [Firebase Console](https://console.firebase.google.com/)
2. 点击"创建项目"，输入项目名称（如 `bbq-todolist`）
3. 等待项目创建完成

### 步骤2：启用Realtime Database

1. 在Firebase控制台左侧菜单，选择"构建" → "Realtime Database"
2. 点击"创建数据库"
3. 选择**美国**或离你最近的区域
4. 选择**以测试模式启动**（允许读写）
5. 点击"完成"

### 步骤3：获取配置

1. 在Firebase控制台，点击项目设置（齿轮图标）
2. 向下滚动，找到"你的应用"部分
3. 点击 `< />` 图标（Web应用）
4. 注册应用（随便起个名字如 `bbq-tasks`）
5. 复制firebaseConfig对象中的配置

### 步骤4：配置代码

打开 `firebase-config.js`，将你的配置填入：

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",        // 填入你的API Key
  authDomain: "bbq-todolist.firebaseapp.com",
  databaseURL: "https://bbq-todolist-default-rtdb.firebaseio.com",
  projectId: "bbq-todolist",
  storageBucket: "bbq-todolist.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

### 步骤5：部署

#### 方式A：GitHub Pages（免费，推荐）

1. 在GitHub创建新仓库，上传 `index.html` 和 `firebase-config.js`
2. 进入仓库设置 → Pages
3. Source 选择 "main branch"
4. 保存后获取网址

#### 方式B：Vercel（免费）

1. 访问 [Vercel](https://vercel.com)
2. 用GitHub账号登录
3. 点击 "New Project"，导入你的GitHub仓库
4. 自动部署，获取网址

#### 方式C：本地测试

双击打开 `index.html` 即可在本地测试（但数据同步需要部署到支持HTTPS的服务器）

## 使用方法

1. 打开生成的网址
2. 输入你的名字，点击"加入"
3. 添加任务，选择负责人
4. 分享网址给其他人，大家看到的是同一份数据

## Firebase免费额度

- Realtime Database: 100并发连接 + 1GB存储 免费
- 足够小规模活动使用

## 安全规则（可选）

如果想限制数据操作，可以在Firebase控制台设置规则：

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

这允许所有人读写，适合小范围活动使用。