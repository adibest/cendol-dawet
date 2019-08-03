/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from './datasource/data';

export default class ChatList extends Component {
  render() {
    return (
      <ScrollView>
          {users.map((user) =>
            <TouchableOpacity>
              <ListItem
                key={user.login.username}
                roundAvatar
                title={`${user.name.first.toUpperCase()}`}

                subtitle={user.email}
                leftAvatar={{
                  source: user.picture.thumbnail && { uri: user.picture.thumbnail },
                  title: user.name.first.toUpperCase()
                }}

                rightIcon={{name: 'keyboard-arrow-right'}}
              />

            </TouchableOpacity>

          )}

      </ScrollView>
    );
  }
}

ChatList.defaultProps = { ...users }
