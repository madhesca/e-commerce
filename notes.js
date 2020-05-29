//in pages, create shop folfer, shop.component
//class comp name ShopPage
//state of obj, collections prop = array cpy paste
//create const shop.data, export SHOPDATA = the array
//render this  ti shop componnent
///redner h1 of shop age, create route /shop
//save and test,\\

//component, preview-collection folder, preview-collection.component
//preview-collection.styles.scss
//func comp name CollectionPreview, title and items as params
//in, div. collection-preview, h1 . title, touppercase div . preview
//in, loop the items and render items name with key
//import and render this in SHOPPAGE
//in render, desc the collections from state
//return div . shop-page
//below, map the collection, descture id, othercollection props
//render Collection preview and give props
//save and test

//filter the content to display 4
done;
//component, collection-item, collection item component, styles
//func comp name CollectionItem
//div .  collection-item, div . image
//style attr backgImg `` url()imageUrl //open only
//div .collection-footer
//span c name - render name
//san c price  - render price
//props id name price imageUrl

//copy paste for collection-item styles
//import styles
//render collection item to collection preview
//map the collecionitem, give key and the rest of otheritemProps

//style the collection preview, copy paste and import styles
//save and test

// in app css, padding to body 20 60 px
//save and test, staged and commit
done;

//compoenent, header folder, header comp and styles
//func comp div. header
//Link to base url class logo-container
//comp, assets, crown.svg, import in header.comp
//in Link, render Loogo class logo
//below link, div . options, Link . option link to /shop name SHOP
//Link CONTACT
//render Header in app outside switch
//save and test

//copy paste header styles,
//app css a tag dexdecor non, color black
//save and test
done;

//pages, sign-in-and-sign-up folder, compo and styles
//in comp,func name SignInAndSignUpPage
//div . sign-in-and-sign-up  SIGN IN
//render in App route /sigin belowest
//save and test

//comp sign-in folder, sign-in comp and styles
//class comp name SignIn
//state, email password ''
//render return div. sign-in
//h2 I already have and account
//span Sign in with your email and password
//form input name email value state email required
//label Email//// do this for pw

//below, input type submit value Submit Form
//onsubmit on form
//create handleSubmit, prevent default as event
// set the state back to empty string
//setOnchange on input create handleChange
//destructue value and name in event target
//set the state [name]: value

//render this to sign in Page
//save and test
done;

//comp form-input folder, comp and styles
//func comp, name FormInput
//des props of handleChange, label, otherProps
//div . group, input . form-input
//call handleChange spread props
//below, if label is true, render label else, null
//in label . dynamic
//`${otherprops.value.length ? 'shrink' : ''} form-input-label` }
//render label

//copy paste styles to form-input
//render forminput to signin
//change onchange to handlechange
//add label to  email and pw
//delete label tags
//save and test

//in signin styles,  .sign-in width 30vw
done;
//comp custom-buttom folder, comp and styles
//func comp name CustomButton
//button . custom-button
//descrute childern and otherProps, spread other to button
//render childern
//add button styles
//render button to sign in
//save and test

//in sign in styles,
//display flex flex direct column
//title margin 10 0
done;

//REMOVE_ITEM carttype
//add action, removeItem
//add case to reducer
//incart utils export const removeItemFromCart (the items, the removeitem)
//create existingCartItem should be true or false
//if existinCartItem  is 1, filter to remove
// if cartItem.id = tocarttoremove id, return obj  , where quantity is less 1
//else, return the cartItem
//in reducer, add to cartItems the removeItemfrCart with 2 args

//import addItem, and removeItem
//modify dispatch
//desctructure and bind to onClick
done;

//directory comp
//cirecto redux
//directory.reducer
done;
//comp, collections-oveview folder, comp styles
//func name CollectionsOverview comp, styles import
//import connect, createtructureselector, collectionPreview
//import selectCollections
//div. collections-overview
//copy map from shop comp
//delete unused from shop comp
//mapstatetopros, connect

//import Collection overview to shop comp and render

//in collec overview styles
// .collections-overview, display flex
//flex direction column

//save and test
done


Section 18
//put thunk to middleware store
//types FETCH_COLLECTIONS_START,
//FETCH_COLLECTIONS_SUCCESS
//FETCH_COLLECTIONS_FAILURE

//add isFEtching to state false, errorMessage undefined
//case F..STart, set isFetching to true
//SUCCESS. isFetchin false, update collections
//FAILURE, isFet false, erroMage, payload

//actions
//change to fetchCollectionsStart
//type START

//fetchCollectionsSuccess, collectionMap arg
//type SUCCESS , and setPayload

//fetchCollectionsStartAsync, return dispatch => {}
//copy from shop com then paste, del updateCollections(coll...)
//import firestore and convertCollectionsSnapshotToMap from firebase utils
//bekow collection ref, call dispatch
//call fetchcollStart() inside

//after collectionsMap var, call dispatch
//call inside of it the fetcCollSuc (colmap)

//fetchCollectionsFailure, errorMessage as arg
//type FAILURE, set payload
//set catch func arg err => call dispatch
//call fetchcolfailure(error.message)
//empty the comdidmount  and state
//empty import on firebase

//import fetchColleStarasync
//import createStrucSelec

//in selector create selectIsCollectionFetching
//shop.isFetching
//import this to shop

//empty mapdispatch, above, create mapstate

//in maPstate, call createSSlector and create prop of isCollectionFetching
//value is the select var


//in mapProps  dispatch arg, call fetchAzync
//deconstruct is fetching beise maps and set this to is loading
//inCompodedmount, desctructore  fetAysn and just call it
/
//in selector  selectIsCollectionsLoader
// shop => !!shop.collections
// import this on shop component
//add this to mapState as isCollectionsLoaded
//descture this and put this as the value for isLoading as !isCollectionLoaded