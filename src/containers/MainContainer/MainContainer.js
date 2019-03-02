import React, {Component, Fragment} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, Modal} from "react-native";
import {getContacts} from "../../store/actions/actionTypes";
import {connect} from "react-redux";
import {styles} from "./MainContainerCss";

class MainContainer extends Component {

    state = {
        modalVisible: false,
        contacts: {}
    };

    componentDidMount(){
        this.props.getContacts()
    }

    modalHandler = (id, contacts) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    };

    render() {
        console.log(this.state.contacts);
        const CONTACTS = this.props.contacts;
        const contactsShowInfo = Object.keys(CONTACTS).map((contactsItem, index) => {
            const contact = this.props.contacts[contactsItem];
            return (
                <TouchableOpacity onPress={this.modalHandler)} style={styles.InfoContacts} key={contactsItem}>
                    <Image source={{uri: contact.photo}} style={{width: 100, height: 100}}/>
                    <Text style={{marginRight: 50, fontSize: 22}}>{contact.name}</Text>
                </TouchableOpacity>
            )
        });

        return (
            <Fragment>
                <ScrollView >
                    <View style={styles.showInfoContacts}>
                        {contactsShowInfo}
                    </View>
                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>{this.state.contacts.name}</Text>

                            <TouchableOpacity
                                onPress={this.modalHandler}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.reducerContact.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getContacts: () => dispatch(getContacts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
