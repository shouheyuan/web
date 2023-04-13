
// 处理路由数据, 返回layout左侧菜单信息
export const routeDataProcessor = (option) => {
    // 先简单过滤'/'路由，option是完整的路由信息，可以通过Meta等其他参数智能过滤
    const filterRoute = ['/']
    return option.filter(e => e.name && !filterRoute.includes(e.name))
}