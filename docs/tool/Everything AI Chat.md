# Everything AI Chat：智能本地文件搜索工具

## 项目概述
Everything AI Chat 是一个开源的桌面搜索工具，将本地极速搜索与AI智能相结合。基于著名的 Everything 搜索引擎，该项目通过现代化前端技术（Vue 3 + Electron）实现了更智能的文件搜索体验。

## 核心功能

### 1. 智能连接 Everything
- **自动定位安装路径**：通过注册表、常见路径等多策略查找 Everything
- **一键启用服务**：自动配置 HTTP 服务器（默认端口80）
- **三级进程管理**：优雅关闭 → 强制终止 → 高级终止的智能管理

### 2. 混合搜索模式
- **自然语言处理**（需配置 OpenAI API）
  - 输入“上周修改的PDF” → 自动转换为 `*.pdf dm:lastweek`
- **原生语法支持**：
  - 支持 `size:>10mb`, `path:desktop` 等高级搜索语法
- **本地规则优化**：无API时仍支持基础语义转换

### 3. 现代化界面
- 自定义无边框标题栏
- 实时连接状态监控
- 文件类型图标识别（文档/图片/视频等）
- 多维度排序（名称/大小/修改时间）

## 技术架构
mermaid
graph LR
A[Electron主进程] --> B[Everything HTTP API]
C[Vue 3渲染进程] --> D[SQLite数据库]
A <--> C
B <--> A


### 关键技术
- 前端：Vue 3 + Vite
- 后端：Electron + Node.js
- 存储：SQLite（历史记录）
- 安全：上下文隔离 + 预加载脚本通信

## 应用场景
1. **开发者**：快速定位项目文件 `*.tsx modified:today`
2. **内容创作者**：查找 `size>100mb 的视频文件`
3. **办公场景**：检索 `本周修改的财务报表.xlsx`

## 安装使用
bash
克隆项目

git clone https://github.com/MaskerPRC/everything-ai-chat.git

安装依赖

npm install

开发模式

npm run dev

生产构建

npm run build:electron


> **环境要求**：Windows 7+，Everything 1.4.1+，Node.js 16+

## 项目特点
- **安全设计**：禁用Node.js集成，启用上下文隔离
- **性能优化**：Vite构建 + 组合式API
- **跨版本兼容**：支持Everything历史版本

## 开发价值
该项目展示了：
1. 传统桌面软件与现代前端技术的融合
2. AI能力在本地工具中的实用化落地
3. 开源项目如何解决实际工作痛点

项目地址：[https://github.com/MaskerPRC/everything-ai-chat](https://github.com/MaskerPRC/everything-ai-chat)