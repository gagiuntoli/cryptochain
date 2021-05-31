import React, { Component } from 'react';
import { stringify } from 'uuid';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

class Block extends Component {
    state = { displayTransaction: false };

    toggleTransaction = () => {
        this.setState({ displayTransaction: !this.state.displayTransaction });
    }

    get displayTransaction() {

        const { data } = this.props.block;
                            console.log("data",data)
        const stringifyData = JSON.stringify(data);

        const dataDisplay = stringifyData.length > 15 ?
            `${stringifyData.substring(0, 15)}...` : stringifyData;

        if (this.state.displayTransaction) {
            return (
                <div>
                    {
                        data.map(transaction => (
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                        ))
                    }
                    <br />
                    <Button bsStyle="danger" bsSize="small" onClick={this.toggleTransaction}>Show less</Button>
                </div>
            );
        }
        
        return (
            <div>
                Data: {dataDisplay}
                <Button bsStyle="danger" bsSize="small" onClick={this.toggleTransaction}>Show more</Button>
            </div>
        );
    }

    render() {
        //console.log('this.displayTransaction', this.displayTransaction);

        const {timestamp, hash } = this.props.block;
        const hashDisplay = `${hash.substring(0, 15)}...`;

        return (
            <div className='Block'>
                <div>Hash: {hashDisplay}</div>
                <div>Timestamp: {new Date(timestamp).toLocaleDateString()}</div>
                {this.displayTransaction}
            </div>
        )
    }
}

export default Block;