//自定义距离多少天到结束时间 定义的一个方法
function distanceTimeLimited(time) {
    var distanceTimeLimited = new Date(time).getDate() - new Date().getDate()
    return distanceTimeLimited
}
export default distanceTimeLimited