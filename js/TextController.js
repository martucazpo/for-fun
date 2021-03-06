
class TextController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.makeAChange = this.makeAChange.bind(this)
    }
    componentDidMount(){
        this.setState({
            ...this.state,
            value : this.props.text
        })
    }
    handleChange(e){
        let { value } = e.target
        this.setState({
            ...this.state,
            value
        }) 
    }
    handleSubmit(e){
        e.preventDefault()
        this.makeAChange(this.state.value)
    }
    makeAChange(text){
        this.props.changeText(text)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      <select className="f-input" value={this.state.value} onChange={this.handleChange}>
                        <option value="default-txt">Default</option>
                        <option value="shadow-txt">Handwritten</option>
                        <option value="hm-txt">More Formal</option>
                    </select>   
                    </label>
                   <input className={`btn ${this.props.theme} submit-btn`} type="submit" value="Change Text"/>
                </form> 
            </div>
        )
    }
}