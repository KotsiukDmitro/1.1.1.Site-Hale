import * as React from "react"
import { Accordion } from "react-bootstrap"

const FaqAccordion = () => {

    const list = [
        {
            q: "Is Hale really comfortable to wear?",
            a: "Yes! But it may feel a little weird at first. Wearing a device in the nose is likely a new sensation. Like contact lenses or hearing aids, it may take up to two weeks to fully adjust. Be patient – the benefits of nasal breathing are worth it!"
        },
        {
            q: "Can Hale get stuck in your nose?",
            a: " Hale was specifically designed to prevent it from ever getting stuck in your nose. The clear band that attaches the left and right pieces prevents Hale from getting stuck in your nose and makes it super easy to remove. Tens of thousands of Hale devices are being safely used in noses around the world."
        },
        {
            q: "Can people tell when I’m wearing Hale?",
            a: " Hale was designed to balance exceptional airflow improvement while being virtually undetectable to those around you. While you may look at yourself in the mirror and notice a slight difference, even your close friends and family most likely won’t."
        },
        {
            q: "Does Hale help with Sleep Apnea?",
            a: "Hale is not a replacement for CPAP for people with sleep apnea. However, it may help your CPAP work better if worn in conjunction with Hale. As with any medical condition, we advise you to check with your physician before using Hale."
        },
        {
            q: "Will Hale fit my nose?",
            a: " Like any part of the body, noses vary in size and shape. Hale was developed with comfort in mind and the three size options make it easy for you to find the perfect fit for your nose shape."
        },
        {
            q: "Will Hale help with a deviated septum?",
            a: " Yes! Hale works wonders to improve breathing for those suffering from a deviated septum."
        },
        {
            q: "Will Hale help with Nasal Valve Collapse?",
            a: " Yes! Hale works wonders to improve breathing for those suffering from Nasal Valve Collapse."
        },
        {
            q: "Does Hale help with Allergies or Colds?",
            a: " Yes! Hale helps to improve breathing for those suffering from an inflammatory nasal response caused by allergies or a cold. Hale provides relief by opening up the nasal passage and improving air flow."
        },
        {
            q: "Is there a money back guarantee and/or warranty?",
            a: " Yes. We offer a 30-Day Satisfaction Guarantee on all Hale Breathing Aids. If you're not 100% satisfied with your Hale, we are happy to help you with a return. We want you to be happy!"
        },
        {
            q: "When can I expect my order?",
            a: " FAST! We ship all orders within 24-48 hours of receiving them! On average our product is delivered within 3-5 business days in the United States. For orders outside the USA, please allow 7-21 business days for your order to arrive. Delivery times will vary based on country."
        },

    ]

    return (
        <Accordion className="accordion" alwaysOpen>
            {list.map((item, key) => {
                return (
                    <Accordion.Item eventKey={key} key={key}>
                        <Accordion.Header className="faq-header">{item.q}</Accordion.Header>
                        <Accordion.Body>{item.a}</Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>

    )
}

export default FaqAccordion