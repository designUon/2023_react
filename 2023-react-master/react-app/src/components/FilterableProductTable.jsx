import productData from '../data/product.json'

import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

// 1. 하향식으로작성 (부모부터 작성)
// 2. 정적데이터를 이용해서 작성
// 3. state와 props구분해서 작성
export class FilterableProductTable extends Component {
  constructor(props){
    super(props)
    this.state={
        searchText : "",
        isOnlyStock : false
    }
  }

  // toggle 메소드를 실행할때마다
  // this.state.isOnlyStock T/F 로 바꿈
  toggleStock = () =>{
    this.setState({isOnlyStock: !this.state.isOnlyStock})
    console.log("메소드 실행")
  }

  render() {
    console.log(productData);
    // isOnlyStock이 true일때 
    // productData가 stock이 true인것만 배열로 만들기
    const checkedProducts 
        = productData.filter((product)=>product.stocked);

    return (
      <div>
        {/** 검색어,체크박스에 관한 값 */}
        <SearchBar 
            isOnlyStock={this.state.isOnlyStock}
            // props 값으로 메소드를 작성해서 전달가능
            toggleStock={this.toggleStock}
        />
        {/** 가져온 데이터 값을 보여줄 공간 */}
        <ProductTable products={this.state.isOnlyStock ? checkedProducts : productData}/>
      </div>
    )
  }
}

export default FilterableProductTable