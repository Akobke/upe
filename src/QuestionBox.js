function QuestionBox(){
    <div class="qb-surround">
        <section class="qb-section">
            <h1 class="qb-question-title">What is joe?</h1>
            <section class="qb-question-choices">

            </section>
        </section>
    </div>
}

function Answer(props){
    return <p class="qb-answer">{props.text}</p>
}

export default QuestionBox;