console.log('start!');
import { EksReact, Component } from './EksReact.js'
class MyCom extends Component {
    render() {
        return (
            <div>
                <div>23333</div>
                <div>23333</div>
                <div>
                    {this.children}
                </div>
            </div>
        );
    }
}

let a = (
    <MyCom name="a" id="ida">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </MyCom>
);

EksReact.render(a, document.body);