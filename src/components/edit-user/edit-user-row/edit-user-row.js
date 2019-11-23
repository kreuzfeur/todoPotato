//react
import React, { Component } from 'react';
//components
import Select from 'react-select';
//styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class EditUserRow extends Component {
    state = {
        onSaveDisabled: true,
        data: {
            roleId: null,
            password: '',
            passwordConfirmation: '',
            userId: null
        }
    }
    componentDidMount() {
        const {role, id} = this.props;
        const newData = {
            ...this.state.data,
            roleId: role.id,
            userId: id
        }
        this.setState({data: newData})
    }
    onPasswordChange = (value) => {
        const newData = {
            ...this.state.data,
            password: value
        }
        this.setState({ data: newData })
    }
    onPasswordConfirmationChange = (value) => {
        const newData = {
            ...this.state.data,
            passwordConfirmation: value
        }
        this.setState({ data: newData })
    }
    onRoleChange = (roleId) => {
        this.setState({ 
            ...this.state,
            data: {
                ...this.state.data,
                roleId
            }
         })
    }
    //test je
    isDisabled = () => (this.props.username === 'admin' ? true : false);
    enableSave = () => this.setState({ onSaveDisabled: false })
    render() {
        const { id, username, options, role, onSave, onDelete } = this.props;
        const data = this.state.data;
        return (
            <tr>
                <td className="align-middle">{id}</td>
                <td className="align-middle">{username}</td>
                <td>
                    <div className="input-group">
                        <input
                            placeholder="Новый пароль"
                            value={data.password}
                            className="form-control"
                            type="password"
                            disabled={this.isDisabled()}
                            onChange={elt => {
                                this.enableSave();
                                this.onPasswordChange(elt.target.value);
                            }}
                        />
                        <input
                            placeholder="Повторите пароль"
                            className="form-control"
                            type="password"
                            value={data.passwordConfirmation}
                            disabled={this.isDisabled()}
                            onChange={elt => {
                                this.enableSave();
                                this.onPasswordConfirmationChange(elt.target.value);
                            }}
                        />
                    </div>
                </td>
                <td>
                    <Select
                        options={options}
                        onChange={({ value }) => {
                            this.enableSave();
                            this.onRoleChange(value)
                        }}
                        defaultValue={{ label: role.role, value: role.id }}
                        isDisabled={this.isDisabled()}
                    />
                </td>
                <td>
                    <button 
                        className="btn btn-success" 
                        disabled={this.state.onSaveDisabled} 
                        onClick={() => {
                            const newData = {
                                ...this.state.data,
                                password: '',
                                passwordConfirmation: ''
                            }
                            this.setState({
                                onSaveDisabled: true,
                                data: newData
                            })
                            onSave(data)
                        }}
                    >
                        <FontAwesomeIcon icon={faSave} />
                    </button>
                    <button className="btn btn-danger" onClick={() => onDelete(id)} disabled={this.isDisabled()}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </td>
            </tr>
        )
    }
}