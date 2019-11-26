//react
import React, { Component } from 'react';
//router
import { Link } from 'react-router-dom';
//styles
import './page-paginator.scss';

export default class PagePaginator extends Component {
    disablePrevios = (page) => {
        if (page === 1) {
            return 'disabled'
        }
    }
    disableNext = (page, totalPages) => {
        if (page === totalPages) {
            return 'disabled'
        }
    }
    render() {
        const { page, totalPages, url } = this.props;
        let pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push(
                <li className={`page-item ${(i === page - 1) ? 'active' : false}`} key={i} >
                    <Link className="page-link pagePaginatorNavLink" to={`${url}${i + 1}`}>{i + 1}</Link>
                </li>
            );
        }
        return (
            <nav className="col-12 pagePaginator">
                <ul className={`pagination `}>
                    <li className={`page-item ${(this.disablePrevios(page))}`}>
                        <Link className="page-link pagePaginatorNavLink" to={`${url}${page - 1}`} >Предыдущая</Link>
                    </li>
                    {pages}
                    <li className={`page-item ${(this.disableNext(page, totalPages))}`}>
                        <Link className="page-link pagePaginatorNavLink" to={`${url}${page + 1}`} >Следующая</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}