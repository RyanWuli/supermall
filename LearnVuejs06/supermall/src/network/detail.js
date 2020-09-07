import {request_detail} from './request'

export function getDetailData(iid) {
  return request_detail({
    url: '/supermall/goods/' + iid,
  })
}

// 商品基本信息
export class Goods {
  constructor(itemInfo,columns,shopInfo) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.orgPrice = itemInfo.orgPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.service = shopInfo.service
  }
}
