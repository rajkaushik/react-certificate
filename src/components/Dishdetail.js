import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function renderComments(comments) {
    const listItem = comments?.map((item) => (
        <div key={item.id}>
            <p>{item.comment}</p>
            <p>
                {item.author},{' '}
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                }).format(new Date(Date.parse(item.date)))}
            </p>
        </div>
    ));
    return listItem;
}
function renderDish(dish) {
    if (dish != null)
        return (
            <>
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText className='text-left'>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-12 col-md-5 m-1 text-left'>
                    <h4>Comments</h4>
                    {renderComments(dish.comments)}
                </div>
            </>
        );
    else return <div></div>;
}
const DishDetail = (props) => {
    return (
        <>{props.selectedDish ? renderDish(props.selectedDish) : <div></div>}</>
    );
};

export default DishDetail;
