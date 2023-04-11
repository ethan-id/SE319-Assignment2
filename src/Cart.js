import "./cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { setView } from './reducers/viewSlice';
import CartProduct from './CartProduct';

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => (state.productData.value));
  let cartTotal = 0;
  
  return (
    <div>
      <div class="navbar myNav">
          <button onClick={() => {dispatch(setView(0))}} type="button" class="btn btn-primary navButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="returnIcon bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            Return
          </button>
      </div>
      <div>
          <div class="cartCont">
              {data.filter((element) => {
                  return element.quantity > 0;
              }).map((product) => {
                  cartTotal += (product.quantity * product.price);
                  return (
                    <div>
                      <CartProduct {...product}/>
                      <hr/>
                    </div>
                  );
              })}
              {cartTotal === 0 ? (
                <div class="px-4 py-5 my-5 text-center">
                  <h1 class="display-5 fw-bold text-body-emphasis">You have no items in your cart...</h1>
                </div>
              ) : <></>}
              <div class="totalInfo">
                <div class="h6">
                  Sub-total: ${cartTotal.toFixed(2)} 
                </div>
                <div class="h6">
                  Tax: ${(cartTotal * 0.07).toFixed(2)} 
                </div>
                <div class="h2">
                  Total: ${(cartTotal + (cartTotal * 0.07)).toFixed(2)} 
                </div>
              </div>
          </div>

          <div class="container">
            <div class="row g-5">
              <h4 class="mb-3">Billing address</h4>
                <form class="needs-validation" novalidate="">
                <div class="row g-3">
                  <div class="col-sm-6">
                  <label for="firstName" class="form-label">First name</label>
                  <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
                  <div class="invalid-feedback">
                      Valid first name is required.
                  </div>
                </div>
                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
                      <div class="invalid-feedback">
                          Valid last name is required.
                      </div>
                </div>
                <div class="col-12">
                  <label for="username" class="form-label">Username</label>
                  <div class="input-group has-validation">
                      <span class="input-group-text">@</span>
                      <input type="text" class="form-control" id="username" placeholder="Username" required=""/>
                  <div class="invalid-feedback">
                      Your username is required.
                  </div>
                </div>
              </div>
              <div class="col-12">
                  <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                  <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                  </div>
              </div>

              <div class="col-12">
                  <label for="address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
                  <div class="invalid-feedback">
                      Please enter your shipping address.
                  </div>
              </div>

              <div class="col-12">
                  <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
              </div>

              <div class="col-md-5">
                  <label for="country" class="form-label">Country</label>
                  <select class="form-select" id="country" required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                      Please select a valid country.
                  </div>
              </div>

              <div class="col-md-4">
                  <label for="state" class="form-label">State</label>
                  <select class="form-select" id="state" required="">
                      <option value="">Choose...</option>
                      <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                      Please provide a valid state.
                  </div>
              </div>

              <div class="col-md-3">
                  <label for="zip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                  <div class="invalid-feedback">
                      Zip code required.
                  </div>
              </div>
            </div>

            <hr class="my-4"/>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address"/>
                <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-info"/>
                <label class="form-check-label" for="save-info">Save this information for next time</label>
            </div>

            <hr class="my-4"/>

            <h4 class="mb-3">Payment</h4>

            <div class="my-3">
                <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""/>
                    <label class="form-check-label" for="credit">Credit card</label>
                </div>
                <div class="form-check">
                    <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
                    <label class="form-check-label" for="debit">Debit card</label>
                </div>
                <div class="form-check">
                    <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
                    <label class="form-check-label" for="paypal">PayPal</label>
                </div>
            </div>

            <div class="row gy-3">
              <div class="col-md-6">
                  <label for="cc-name" class="form-label">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                  <small class="text-body-secondary">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                      Name on card is required
                  </div>
              </div>

              <div class="col-md-6">
                  <label for="cc-number" class="form-label">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                  <div class="invalid-feedback">
                      Credit card number is required
                  </div>
              </div>

              <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
                  <div class="invalid-feedback">
                      Expiration date required
                  </div>
              </div>

              <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
                  <div class="invalid-feedback">
                      Security code required
                  </div>
              </div>
            </div>

            <hr class="my-4"/>

            <button class="w-100 btn btn-primary btn-lg" type="submit">Buy</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
