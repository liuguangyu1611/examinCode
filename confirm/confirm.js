import React,{Component} from 'react';
import ReactDOM from  'react-dom'

class Confirm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { tip ,onOk ,onCancel} = this.props ;
        return(
            <div className = `mask`>
                <div className = `dialog_tip_container`>
                    <div className=`tip_content`>
                        <div className=`line`></div>
                        <div className=`close` onClick={(e)=>{ onCancel && onCancel()}}>X</div>
                        <div className=`content`>{tip}</div>
                        <div className = `btns`>
                            <div className = `btn active` onClick={(e)=>{ onOk && onOk()}}>是</div>
                            <div className = `btn` onClick={(e)=>{ onCancel && onCancel()}}>否</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
let node = null ;
let hide = ()=>{
    ReactDOM.unmountComponentAtNode(node);
    document.body.removeChild(node) ;

}
let show = ( tip ,resolve ) =>{
    node = document.createElement('div');
    document.body.appendChild(node);
    ReactDOM.render(<Confirm tip={tip}
                             onCancel={()=>{resolve && resolve(0);hide()}}
                             onOk={()=>{ resolve && resolve(1);hide()}}/>
        ,node)
}
const confirm =(tip)=>{
    return new Promise((resolve,reject)=>{
        show(tip ,resolve)
    })
}
export default confirm;