import React, { useContext } from 'react'
import "./style.css";
import Priceapi from '../datasets/Priceapi'
import { useAppContext } from '../Contexts/app.context';
export const Price = () => {
    const { pricePlan, dispatch } = useAppContext()


    React.useEffect(() => {
        const plans = localStorage.getItem('plans');
        if (!plans) {
            localStorage.setItem('plans', JSON.stringify(Priceapi))

        }
        dispatch('PRICE', JSON.parse(plans))

    }, [])




    const onPackageSelect = (selectedPackage) => {
        const plans = pricePlan.map(plan => {
            plan.isSelected = false;
            return plan
        })
        let index = plans.findIndex((item) => item.id == selectedPackage.id)
        plans[index].isSelected = true;
        dispatch('PRICE', [...plans])
        localStorage.setItem("plans", JSON.stringify(plans))


    }

    return (

        <div className='price'>
            <div className='price-upper'>
                <p className='p1'>PRICING</p>
                <h2>Pricing Plans</h2>
                <p>We help you in finding solutions to your problem <br /> in your startup business</p>
                <img src="images/billing.png" alt="images" />
            </div>
            <div className='packages'>
                <div className='pkg-grid' >
                    {
                        pricePlan.map((curElem) => {
                            {/* let buyNowBtnColor = false;
                            if (curElem.name == "Premium") {

                                buyNowBtnColor = true;
                            } */}

                            {/* buyNowBtnColor = { buyNowBtnColor } */ }
                            return <Card data={curElem} onPackageSelect={onPackageSelect} />
                        })}
                </div>
                <div className='end'>
                    <p><a href="#"> See Plan Details</a></p>
                    <p>All prices are USD</p>
                </div>
            </div>
        </div >
    )
}

const Card = ({ data, buyNowBtnColor, onPackageSelect }) => {

    const curElem = data;

    return (
        <div key={curElem.id}>
            <div className='pkg-card'>
                <div className='blue' >
                    <h1>${curElem.price}/<span style={{ fontSize: '16px' }}>month</span></h1>
                    <h2>{curElem.name}</h2>
                    <p>{curElem.description}</p>
                </div>
                <div className='white'>
                    <p><i class="fa-solid fa-square-check"></i>{curElem.links}</p>
                    <p><i class="fa-solid fa-square-check"></i>{curElem.plaform}</p>
                    <p><i class="fa-solid fa-square-check"></i>{curElem.chat}</p>
                    <p><i class="fa-solid fa-square-check"></i>{curElem.heshtages}</p>
                    <p><i class="fa-solid fa-square-check"></i>{curElem.app}</p>
                    <p><i class="fa-solid fa-square-check"></i>{curElem.users}</p>

                    <button
                        onClick={() => {
                            onPackageSelect(curElem);
                        }}
                        disabled={curElem.isSelected}

                        className={"buy-now" + (buyNowBtnColor ? ' premium-price' : '')}

                    >Buy Now</button>
                </div>
            </div>

        </div >
    )

}
