import { useState } from 'react';
import './App.css';

export default function OddNumbersGenerator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const generateOddNumbers = (a) => {
    if (a <= 0) return '';
    
    // Generate first 'a' odd numbers
    // nth odd number = 2n - 1 (where n starts from 1)
    const oddNumbers = Array.from({ length: a }, (_, i) => 2 * (i + 1) - 1);
    
    // Convert to comma-separated string
    return oddNumbers.join(', ');
  };

  const handleGenerate = () => {
    const num = parseInt(input);
    if (isNaN(num) || num <= 0) {
      setResult('Please enter a valid positive integer');
      return;
    }
    setResult(generateOddNumbers(num));
  };

  const examples = [
    { input: 1, output: '1' },
    { input: 2, output: '1, 3' },
    { input: 3, output: '1, 3, 5' },
    { input: 4, output: '1, 3, 5, 7' },
    { input: 10, output: '1, 3, 5, 7, 9, 11, 13, 15, 17, 19' }
  ];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="header">
          <h1 className="title">🔢 Odd Numbers Generator</h1>
          <p className="subtitle">
            Generate the first N odd numbers (1, 3, 5, 7, ...)
          </p>
        </div>

        {/* Input Section */}
        <div className="card input-card">
          <label className="label">Enter a number:</label>
          <div className="input-group">
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder="Enter a positive integer"
              className="number-input"
              min="1"
            />
            <button onClick={handleGenerate} className="generate-btn">
              Generate
            </button>
          </div>
          
          {result && (
            <div className="result-box">
              <p className="result-label">Output:</p>
              <p className="result-text">{result}</p>
            </div>
          )}
        </div>

        {/* Examples Section */}
        <div className="card examples-card">
          <h2 className="section-title">📝 Examples:</h2>
          <div className="examples-list">
            {examples.map((example, idx) => (
              <div key={idx} className="example-item">
                <span className="example-input">
                  Input a = <strong>{example.input}</strong>
                </span>
                <span className="arrow">→</span>
                <span className="example-output">{example.output}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}