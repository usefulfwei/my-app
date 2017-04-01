import React, { Component } from 'react';
import './App.css';

const data = [
  {
    "id":1,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":2,
    "name":"John Doe",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":3,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":4,
    "name":"hehe",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":5,
    "name":"Messi",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":7,
    "name":"CR",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":8,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":9,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":10,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":11,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":12,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":13,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":14,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":15,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":16,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":17,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":18,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":19,
    "name":"lichang zhang",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  },
  {
    "id":20,
    "name":"Cristiano",
    "email":"zhanglichang2016@gmail.com",
    "phone":0o417517534
  }
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      lists : data,
      length : data.length
    })
  }
  addNew(){
    let name = this.refs.name.value.trim();
    let phone = this.refs.phone.value.trim();
    let email = this.refs.email.value.trim();
    let lists = this.state.lists;
    let length = this.state.length;
    let emailTest = /^[^\.@]+@[^\.@]+\.[a-z]+$/;
    let phoneTest = /^\d{5,10}$/;
    if(!name || !phone || !email){
      alert('please fill the blank');
      return;
    }
    if(!phoneTest.test(phone)){
      alert('please fill in a number');
      return;
    }
    if(!emailTest.test(email)){
      alert('please fill in right form of email');
      return;
    }
    let newUser;
    newUser = {
      id: length+2,
      name: name,
      email: email,
      phone: phone,
      editState: false
    };
    lists.unshift(newUser);
    this.setState({lists:lists,length:lists.length})
    this.refs.name.value = '';
    this.refs.phone.value = '';
    this.refs.email.value = '';
  }
  editItem(id){
    let lists = this.state.lists;
    for(let i=0;i<lists.length;i++){
      if(lists[i].id === id){
        let { editState = false } = lists[i];
        lists[i].editState = !editState;/*取反*/
        return this.setState({lists});
      }
    }
    this.setState({lists})
  }
  saveItem(data){
    let lists = this.state.lists;
    for(let i=0;i<lists.length;i++){
      if(lists[i].id === data.id){
        let { editState } = lists[i];
        lists[i].editState = !editState;/*取反*/
        lists[i] = data;
        break;
      }
    }
    this.setState({lists})
  }
  delItem(id){
    let lists = this.state.lists;
    for(let i=0;i<lists.length;i++){
      if(lists[i].id === id){
        lists.splice(i,1);
        break;
      }
    }
    this.setState({lists:lists,length:lists.length})
  }
  render() {
    return (
      <div className="App">
        <h2>List of participants</h2>
        <div className=" row add-box">
            <div className="col-md-3"><input  type="text" ref="name" placeholder="Full name"/></div>
            <div className="col-md-4"><input  type="email" ref="email" placeholder="E-mail address"/></div>
            <div className="col-md-3"><input type="phone" ref="phone" placeholder="Phone number"/></div>
            <button className="btn col-md-2" onClick={this.addNew.bind(this)}>Add new</button>
        </div>
        <div className="row header">
          <div className="col-md-3"><p>Name</p></div>
          <div className="col-md-4"><p>E-mail address</p></div>
          <div className="col-md-3" ><p>Phone number</p></div>
        </div>
        <div className="list-box">
          {
            this.state.lists.map((list) => {
              return <List list={list} key={list.id} editItem={this.editItem.bind(this)}
                           saveItem={this.saveItem.bind(this)} delItem={this.delItem.bind(this)}/>
            })
          }
        </div>
      </div>
    );
  }
}
/*
 handleChangeVal(e,key){
 let val = e.target.value;
 if(key=='title'){
 this.setState({title:val})
 }else{
 this.setState({content:val})
 }
 }

 onChange={(e)=>{this.handleChangeVal(e,'content')}} value={this.state.content}
* */
class List extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      phone:'',
      email:'',
    }
  }
  componentDidMount(){
    this.setState({
      name:this.props.list.name,
      phone:this.props.list.phone,
      email:this.props.list.email,
    })
  }
  onChange(e,key){
    let text = e.target.value;
    if(key === 'name'){
      this.setState({name:text})
    }
    if(key === 'phone'){
      this.setState({phone:text})
    }
    if(key === 'email'){
      this.setState({email:text})
    }
  }
  saveItem(){
    let name = this.refs.name.value.trim();
    let phone = this.refs.phone.value.trim();
    let email = this.refs.email.value.trim();
    let emailTest = /^[^\.@]+@[^\.@]+\.[a-z]+$/;
    let phoneTest = /^\d{5,10}$/;
    if(!name || !phone || !email){
      alert('please fill the blank');
      return;
    }
    if(!phoneTest.test(phone)){
      alert('please fill in a number');
      return;
    }
    if(!emailTest.test(email)){
      alert('please fill in right form of email');
      return;
    }
    this.props.saveItem({
      id: this.props.list.id,
      name:name,
      email:email,
      phone:phone
    })
  }
  render(){
    let {id,name,phone,email,editState = false} = this.props.list;
    let showPart = editState ? (
        <div className="row lists">
            <div className="col-md-3"><input  type="text" ref="name" onChange={(e) => this.onChange(e,'name')} value={this.state.name}/></div>
            <div className="col-md-3"><input  type="email" ref="email" onChange={(e) => this.onChange(e,'email')} value={this.state.email}/></div>
            <div className="col-md-3"><input type="phone" ref="phone" onChange={(e) => this.onChange(e,'phone')} value={this.state.phone}/></div>
            <div className="col-md-3">
              <button className="btn  save" onClick={this.saveItem.bind(this)}>Save</button>
              <button className="btn  cancel" onClick={()=> this.props.delItem(id)}>Delete</button>
            </div>
        </div>
        ) : (
            <div className="row lists">
              <div className="col-md-3"><p>{name}</p></div>
              <div className="col-md-4"><p>{email}</p></div>
              <div className="col-md-3"><p>{phone}</p></div>
              <div className="col-md-1 span-box"><span className="glyphicon glyphicon-pencil" aria-hidden="true" onClick={ ()=> this.props.editItem(id)}></span></div>
              <div className="col-md-1 span-box"><span className="glyphicon glyphicon-trash" aria-hidden="true" onClick={ ()=> this.props.delItem(id)}></span></div>
            </div>
        );
    return(
        <div>
          {showPart}
        </div>
    )
  }
}



export default App;
