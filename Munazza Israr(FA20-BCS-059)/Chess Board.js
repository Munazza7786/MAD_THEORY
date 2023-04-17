import React from 'react';
import { StyleSheet, View } from 'react-native';

const ChessBoard = () => {
  const size = 8;
  const board = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const isBlack = (i + j) % 2 === 1;
      const color = isBlack ? 'black' : 'white';
      const style = [styles.cell, { backgroundColor: color }];
      row.push(<View style={style} key={`${i}${j}`} />);
    }
    board.push(<View style={styles.row} key={i}>{row}</View>);
  }

  return <View style={styles.board}>{board}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
  },
});

