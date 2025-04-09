# Vibecheck - MMO Game Testing Tool

Vibecheck is a powerful testing tool designed for MMO (Massively Multiplayer Online) game developers that allows testing multiple concurrent players in a single window. It's perfect for multiplayer game development and debugging.

## Features

- 📱 Multiple Player Simulation: Test your MMO with multiple concurrent players in a single window
- 🔍 Real-time Error Monitoring: Built-in console error tracking for each player instance
- 📏 Adjustable Viewport Scaling: Easily resize player viewports to fit your screen
- 🎮 Universal Compatibility: Works with any web-based MMO game
- 🛠️ Developer-Friendly: Includes error logging and console monitoring for each player instance

## Getting Started

1. Open Vibecheck in your browser
2. Enter your MMO game URL in the input field
3. Click "Add Player" to create additional player instances
4. Use the scaling controls (+/-) to adjust the viewport sizes
5. Monitor console errors and game behavior across all instances

## Usage

### Adding Players

- Click the "Add Player" button to create a new player instance
- Each player runs in an isolated environment with its own console and error tracking

### Managing Viewports

- Use the "+" and "-" buttons to adjust viewport scaling
- Scale ranges from 10% to 100%
- Clear all players using the "Clear All" button

### Error Monitoring

Each player instance includes:

- Console error tracking
- Unhandled promise rejection monitoring
- Runtime error detection
- Visual error indicators

## Development

This project uses:

- Vanilla JavaScript for core functionality
- Tailwind CSS and DaisyUI for styling
- Custom phone frame simulation for realistic testing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
