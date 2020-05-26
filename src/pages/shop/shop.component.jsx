import React from "react";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapShotToMap } from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
