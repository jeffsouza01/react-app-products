import React, { Component} from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){ 
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productsInfo } = responde.data
        this.setState({ products: docs, productInfo, page});
    };

    prevPage = () => {}

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    };

    

    render() {
        const {products} = this.state; /// Dessestruturação
    return (

        
        <div className='product-list'>
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href={product.url} target='_blanck'>Acessar</a>
                </article>
            ))}

            <div className='actions'>      
                <button onClick={this.prevPage}>Anterior</button>
                <button onClick={this.nextPage}>Próxima</button>
        
            </div>
        </div>
    );
    }
    
}