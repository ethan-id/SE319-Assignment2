import "./styles/Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "./reducers/viewSlice";

function validateClick() {
    let a = document.getElementById("fname").value;
    let b = document.getElementById("lname").value;
    let c = document.getElementById("num").value;
    let d = document.getElementById("add").value;
    let e = document.getElementById("state").value;
    let f = document.getElementById("city").value;
    let g = document.getElementById("zip").value;
    let bool = false;
    let bool2 = true;
    if (a === "") {
        alert("You have not put in your First Name");
        bool2 = false;
    }
    if (b === "") {
        alert("You have not put in your Last Name");
        bool2 = false;
    }
    if (c === "") {
        alert("You have not put in your Card Number");
        bool2 = false;
    }
    else if (c < 1000000000000000) {
        alert("Card Number has too few digits to be real");
        bool2 = false;
    }
    else if (c > 10000000000000000) {
        alert("Card Number has too many digist to be real");
        bool2 = false;
    }
    if (d === "") {
        alert("You have not put in your Primary Address");
        bool2 = false;
    }
    if (f === "") {
        alert("You have not put in your City");
        bool2 = false;
    }
    if (e === "") {
        alert("You have not put in your State");
        bool2 = false;
    }
    if (g === "") {
        alert("You have not put in your ZIP");
        bool2 = false;
    }
    else if (g < 10000) {
        alert("ZIP is too low to be a real ZIP");
        bool2 = false;
    }
    else if (g > 99999) {
        alert("ZIP is too high to be a real ZIP");
        bool2 = false;
    }
    if (bool2 === true) {
        bool = true;
    }
    return bool;

}
    


const Payment = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => (state.productData.value));

    let total = 0;
    data.map((product) => {
        total += (product.quantity * product.price);
        return product;
    })
    total += (total * 0.07);
    total = total.toFixed(2);
    localStorage.setItem("total",total);

    return (
        <div key="paymentInfo" class="d-flex flex-column container payment">
            <div class="fw-bold h2 mb-4">
                Payment Information
            </div>

            <div class="container">
                <div class="row p-3 pb-0">
                    <div class="col">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="John" aria-label="First Name" aria-describedby="basic-addon2" id="fname"/>
                    </div>

                    <p id="demo"></p>

                    <div class="col">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Smith" aria-label="Last Name" aria-describedby="basic-addon2" id="lname"/>
                    </div>
                </div>
                
                <label class="p-3 pb-0">Card Number</label>
                <div class="input-group p-3 pt-0 pb-0">
                    <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
                    </svg>
                    </span>
                    <input type="number" class="form-control" placeholder="1234567890123456" aria-label="Username" aria-describedby="basic-addon1" id="num"/>
                </div>

                <div class="col p-3 pb-0">
                    <label>Address</label>
                    <input type="text" class="form-control" placeholder="1234 Main St" aria-label="Last Name" aria-describedby="basic-addon2" id="add"/>
                </div>

                <div class="col p-3 pb-0">
                    <label>Address 2</label>
                    <input type="text" class="form-control" placeholder="Apartment #, Studio, Floor" aria-label="Last Name" aria-describedby="basic-addon2" id="add2"/>
                </div>

                <div class="row p-3 pb-0">
                    <div class="col">
                        <label>City</label>
                        <input type="text" class="form-control" placeholder="Los Angeles" aria-label="First Name" aria-describedby="basic-addon2" id="city"/>
                    </div>

                    <div class="col form-group">
                        <label for="state" class="col-sm-2 control-label">State</label>
                        <div class="col">
                            <select class="form-control" id="state" name="state">
                                <option value="">N/A</option>
                                <option value="AK">Alaska</option>
                                <option value="AL">Alabama</option>
                                <option value="AR">Arkansas</option>
                                <option value="AZ">Arizona</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DC">District of Columbia</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="IA">Iowa</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MD">Maryland</option>
                                <option value="ME">Maine</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MO">Missouri</option>
                                <option value="MS">Mississippi</option>
                                <option value="MT">Montana</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="NE">Nebraska</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NV">Nevada</option>
                                <option value="NY">New York</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VA">Virginia</option>
                                <option value="VT">Vermont</option>
                                <option value="WA">Washington</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WV">West Virginia</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    </div>

                    <div class="col">
                        <label>Zip</label>
                        <input type="number" class="form-control" placeholder="90001" aria-label="Last Name" aria-describedby="basic-addon2" id="zip" min="10000" max="99999"/>
                    </div>
                </div>
            </div>
            
            <button onClick={() => {
                let bool = validateClick();
                if (bool == true) {
                    dispatch(setView(2));
                }
            }} class="shadow-lg fs-5 align-self-end w-50 mt-5 btn btn-primary">
                Confirm Purchase of ${total}
            </button>
        </div>
    );
}
  
export default Payment;