# TicTacToe Game

A simple, interactive TicTacToe game built with HTML, CSS, and JavaScript. Play against a friend in this classic 3x3 grid game with a clean, modern interface.

## 🎮 Live Demo

**[Play the Game](https://github.com/yashverma8246/TicTakToe/deployments/github-pages)**

## 🎯 Features

- **Two-Player Gameplay**: Alternating turns between X and O players
- **Win Detection**: Automatically detects winning combinations (rows, columns, diagonals)
- **Draw Detection**: Recognizes when the game ends in a tie
- **Interactive UI**: Click-to-play with visual feedback
- **Reset Functionality**: Start a new game anytime with the reset button
- **Responsive Design**: Adapts to different screen sizes using viewport units
- **Modern Styling**: Clean interface with rounded corners and shadow effects

## 🚀 How to Play

1. The game starts with Player O's turn
2. Click on any empty box to place your mark (O or X)
3. Players alternate turns automatically
4. First player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all 9 boxes are filled without a winner, the game ends in a draw
6. Click "Reset Button" to start a new game

## 🏆 Winning Patterns

The game recognizes the following winning combinations:
- **Rows**: [0,1,2], [3,4,5], [6,7,8]
- **Columns**: [0,3,6], [1,4,7], [2,5,8]
- **Diagonals**: [0,4,8], [2,4,6]

## 🛠️ Technical Details

### Files Structure
```
TicTacToe/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Game logic and interactivity
└── README.md       # Project documentation
```

### Technologies Used
- **HTML5**: Semantic structure and game grid
- **CSS3**: Modern styling with flexbox layout and responsive design
- **Vanilla JavaScript**: Game logic, event handling, and DOM manipulation

### Key Features Implementation
- **Turn Management**: Boolean flag to track current player
- **Move Counter**: Tracks total moves for draw detection
- **Dynamic Styling**: CSS classes for show/hide message container
- **Event Listeners**: Click events for boxes and reset button
- **Game State Management**: Enable/disable boxes based on game status

## 🎨 Design Features

- **Color Scheme**: Soft blue background with light blue game boxes
- **Typography**: Large, readable fonts for game marks
- **Layout**: Centered design using flexbox
- **Visual Effects**: Box shadows and rounded corners for modern appearance
- **Responsive Units**: Uses `vmin` units for consistent sizing across devices

## 🔧 Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashverma8246/TicTakToe.git
   ```

2. **Navigate to project directory**:
   ```bash
   cd TicTakToe
   ```

3. **Open in browser**:
   Simply open `index.html` in your preferred web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Single-player mode with AI opponent
- [ ] Score tracking across multiple games
- [ ] Animation effects for moves and wins
- [ ] Sound effects
- [ ] Different board sizes (4x4, 5x5)
- [ ] Theme customization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yash Verma**
- GitHub: [@yashverma8246](https://github.com/yashverma8246)

---

⭐ If you enjoyed this project, please give it a star on GitHub!