import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'



const FAQ = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);


  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)} >
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {
                    isAnswerShowing ? <FiMinus /> : <FiPlus />
                }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ