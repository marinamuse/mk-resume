import React from 'react';

const FaqSection = () => {
    return(
        <div className="faq">
            <h2>Any questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Random text that should have some few lines</p>
                </div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Random text that should have some few lines</p>
                </div>
            </div>
            <div className="question">
                <h4>Payment methods</h4>
                <div className="answer">
                    <p>Random text that should have some few lines</p>
                </div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Random text that should have some few lines</p>
                </div>
            </div>
        </div>
    )
}

export default FaqSection;