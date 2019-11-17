//react
import React from 'react';
//router
import { withRouter } from 'react-router-dom';
//styles
import './error-404.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Error404 = ({ history }) => {
    return (
        <section className="error404 text-danger row">
            <div className="col-12 error404Container">
                <h1>404</h1>
                <h2>Запрошенная страница не найдена</h2>
                <button type="button" className="btn btn-success btn-lg active" onClick={() => history.push("/")}>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Перейти на главную страницу</span>
                </button>
            </div>
        </section>
    )
}
export default withRouter(Error404);