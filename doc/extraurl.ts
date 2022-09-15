//请求外部接口的文档文件

//nest暂未支持BN接口，转而请求python接口
// const BN_BASE_URL = "https://api1.binance.com";
const LOCAL_PY_SERVER="http://127.0.0.1:5000"
//  请求K线图数据
//  /api/v3/klines?symbol=BTCUSDT&interval=1d
const VOLUME_KLINE = LOCAL_PY_SERVER + "/api/getVolumeData";

export default {
    VOLUME_KLINE
}