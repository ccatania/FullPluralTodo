import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 150,
      backgroundColor: '#F7F7F7',
  },
  input: {
      borderWidth: 1,
      borderColor: '#D7D7D7',
      height: 50,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 3,
  },
  button: {
      height: 45,
      alignSelf: 'stretch',
      backgroundColor: '#05a5d1',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#fafafa',
  },
  cancel: {
      backgroundColor: '#666',
  }
});

class TaskForm extends Component {
    constructor(props, context) {
        super(props, context);
    }

    onChange(text) {
        this.task = text;
    }

    onAddPressed() {
        this.props.onAdd(this.task);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={this.onChange.bind(this)}
                    style={styles.input}
                />
                <TouchableHighlight
                    onPress={this.onAddPressed.bind(this)}
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Add
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.props.onCancel}
                    style={[styles.button, styles.cancel]}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Cancel
                    </Text>
                </TouchableHighlight>
                
            </View>
        );
    }
}

TaskForm.propTypes = {
    onAdd: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
}

export default TaskForm;
