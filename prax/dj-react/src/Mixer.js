import React, {Component} from 'react'
import Square from './Square'

class Mixer extends Component {
    constructor() {
        super()
        
        this.state = {
            colors: ['white', 'white', 'white', 'white'],
            btnTitles: ["Toggle B&W", "Top Purp", "BL Blue", "BR Blue", "?", "?", "?", "?", "Drop a beat"]
        }
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
        const btns = this.state.btnTitles.map(title => {
            return <button style={indBtnStyle}>{title}</button>
        })

        return (
            <div className="mixer">
                STEP INTO THE REALM
                <div style={sqContStyles}>
                    {squares}
                </div>
                <div style={btnContStyles}>
                    {btns}
                </div>
                {/* <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button> */}
            </div>
        )
    }
}

export default Mixer