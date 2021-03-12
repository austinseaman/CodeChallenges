import React, {Component} from 'react'
import Square from './Square'
import audio from './assets/mlg-airhorn.mp3'

class Mixer extends Component {
    constructor() {
        super()
        
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
        this.toggle = this.toggle.bind(this)
        this.topPurp = this.topPurp.bind(this)
        this.blBlue = this.blBlue.bind(this)
        this.brBlue = this.brBlue.bind(this)
        this.mystery1 = this.mystery1.bind(this)
        this.mystery2 = this.mystery2.bind(this)
        this.mystery3 = this.mystery3.bind(this)
        this.mystery4 = this.mystery4.bind(this)
        this.rapHorn = this.rapHorn.bind(this)
    }

    toggle() {
        this.setState(prevState => {
            if(prevState.colors[0] === 'white') {
                return {colors: ['black', 'black', 'black', 'black']}
            } else {
                return {colors: ['white', 'white', 'white', 'white']}
            }
        })
    }
    topPurp() {
        this.setState(prevState => {
            return {colors: ['purple', 'purple', prevState.colors[2], prevState.colors[3]]}
        })
    }
    blBlue() {
        this.setState(prevState => {
            return {colors: [prevState.colors[0], prevState.colors[1], 'aqua', prevState.colors[3]]}
        })
    }
    brBlue() {
        this.setState(prevState => {
            return {colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], 'aqua']}
        })
    }
    mystery1() {
        this.setState(prevState => {
            return {colors: ['lime', prevState.colors[1], prevState.colors[2], prevState.colors[3]]}
        })
    }
    mystery2() {
        this.setState(prevState => {
            return {colors: [prevState.colors[0], 'deeppink', prevState.colors[2], prevState.colors[3]]}
        })
    }
    mystery3() {
        this.setState(prevState => {
            return {colors: [prevState.colors[0], prevState.colors[1], 'yellow', prevState.colors[3]]}
        })
    }
    mystery4() {
        this.setState(prevState => {
            return {colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], '#FF7700']}
        })
    }
    rapHorn() {
        const audio = document.getElementById('audio')
        audio.play()
    }

    render() {
        const sqContStyles = {
            marginBottom: "10px",
            display: "grid",
            gridTemplateColumns: "200px 200px",
            gridTemplateRows: "200px 200px",
            gridGap: "4px",
            justifyContent: "center"
        }
        const btnContStyles = {
            display: "grid",
            gridTemplateColumns: "100px 100px 100px",
            gridGap: "4px",
            justifyContent: "center"
        }
        const indBtnStyle = {
            backgroundColor: "black",
            color: "hotpink",
            fontFamily: 'DotGothic16, sans-serif'
        }

        const squares = this.state.colors.map(color => {
            return <Square color={color}/>
        })

        return (
            <div className="mixer">
                STEP INTO THE REALM
                <div style={sqContStyles}>
                    {squares}
                </div>
                <div style={btnContStyles}>
                    <button style={indBtnStyle} onClick={this.toggle}>Toggle BW</button>
                    <button style={indBtnStyle} onClick={this.topPurp}>Top Purp</button>
                    <button style={indBtnStyle} onClick={this.blBlue}>BL Blue</button>
                    <button style={indBtnStyle} onClick={this.brBlue}>BR Blue</button>
                    <button style={indBtnStyle} onClick={this.mystery1}>?</button>
                    <button style={indBtnStyle} onClick={this.mystery2}>?</button>
                    <button style={indBtnStyle} onClick={this.mystery3}>?</button>
                    <button style={indBtnStyle} onClick={this.mystery4}>?</button>
                    <button style={indBtnStyle} onClick={this.rapHorn}>Drop a Beat</button>
                </div>
                <audio id="audio" src={audio}></audio>
            </div>
        )
    }
}

export default Mixer