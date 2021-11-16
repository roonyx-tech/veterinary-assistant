import * as React from 'react';
import { Link } from 'react-router-dom';
import { INode, IOption } from 'src/domain/model';

export interface INodeViewParams {
    node: INode
    context: INode[],
}

function RenderOutcome(outcome: IOption): JSX.Element {
    return (<Link key={outcome.name} to={`/n/${outcome.name}`}>
        <button>
            {/*button text*/}
            {outcome.label}
        </button>
    </Link>)
}
export function NodeContent(params: { node: INode }): JSX.Element {
    return (<div key={params.node.name} className="tile">
        <div>
            {/*TODO: разобраться с map по id*/}
            {params.node.type === 'outcome' &&
              <div>
                  <h2>Possible diagnoses:</h2>
                  {params.node.description.split(',').map(e => {
                      return <p key={e}>- {e}</p>
                  })}
              </div>
            }
            {params.node.type !== 'outcome' && params.node.description}
        </div>

        <div className="tile__actions">
            {/*buttons block*/}
            {params.node.outcomes ? params.node.outcomes.map(RenderOutcome) : <span />}
        </div>
    </div>)
}

class NodeView extends React.Component<INodeViewParams, any, any> {
    public render() {
        return <NodeContent node={this.props.node} />
    }
}

export default NodeView;
