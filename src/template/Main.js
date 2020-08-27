import React from 'react'
import WorldMap from './Worldmap'
import Navigation from './Navigation'
class MainTemplate extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 ">
                        <Navigation />
                    </div>
                    <div className="col-10 full-height p-0">
                        <WorldMap />
                    </div>
                </div>
            </div>
        )
    }
}
export default MainTemplate;