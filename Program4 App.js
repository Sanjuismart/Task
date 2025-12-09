import React, { useState } from 'react';

export default function MultiplesCounter() {
  const [inputList, setInputList] = useState('1,2,8,9,12,46,76,82,15,20,30');
  const [result, setResult] = useState(null);

  const countMultiples = (numbers) => {
    const result = {};
    
    
    for (let divisor = 1; divisor <= 9; divisor++) {
      let count = 0;
      for (let num of numbers) {
        if (num % divisor === 0) {
          count++;
        }
      }
      result[divisor] = count;
    }
    
    return result;
  };

  const handleCalculate = () => {
    try {
      // Convert input string to array of numbers
      const numbers = inputList
        .split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num));
      
      if (numbers.length === 0) {
        alert('Please enter valid numbers');
        return;
      }
      
      const output = countMultiples(numbers);
      setResult(output);
    } catch (error) {
      alert('Error processing input. Please enter comma-separated numbers.');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      padding: '40px'
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#666',
      marginBottom: '30px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      boxSizing: 'border-box',
      marginBottom: '20px',
      outline: 'none',
      transition: 'border-color 0.3s'
    },
    button: {
      width: '100%',
      padding: '14px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#667eea',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginBottom: '30px',
      transition: 'background-color 0.3s'
    },
    resultBox: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      marginBottom: '20px'
    },
    resultTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px'
    },
    resultText: {
      fontFamily: 'Courier New, monospace',
      color: '#555',
      fontSize: '14px',
      wordBreak: 'break-all'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '15px',
      marginTop: '15px'
    },
    gridItem: {
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      border: '2px solid #e0e0e0',
      textAlign: 'center'
    },
    gridLabel: {
      fontSize: '12px',
      color: '#666',
      marginBottom: '5px'
    },
    gridValue: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#667eea'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Multiples Counter</h1>
        <p style={styles.subtitle}>
          Count how many numbers are divisible by 1-9
        </p>

        <div>
          <label style={styles.label}>
            Enter numbers (comma-separated):
          </label>
          <input
            type="text"
            value={inputList}
            onChange={(e) => setInputList(e.target.value)}
            style={styles.input}
            placeholder="e.g., 1,2,8,9,12,46,76,82,15,20,30"
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
        </div>

        <button
          onClick={handleCalculate}
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = '#5568d3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
        >
          Calculate
        </button>

        {result && (
          <div>
            <div style={styles.resultBox}>
              <h2 style={styles.resultTitle}>Input Array:</h2>
              <p style={styles.resultText}>
                [{inputList.split(',').map(n => n.trim()).join(', ')}]
              </p>
            </div>

            <div style={styles.resultBox}>
              <h2 style={styles.resultTitle}>Output:</h2>
              <div style={styles.resultText}>
                {JSON.stringify(result)}
              </div>

              <h3 style={{...styles.resultTitle, marginTop: '20px'}}>
                Detailed Breakdown:
              </h3>
              <div style={styles.gridContainer}>
                {Object.entries(result).map(([divisor, count]) => (
                  <div key={divisor} style={styles.gridItem}>
                    <div style={styles.gridLabel}>
                      Multiples of {divisor}
                    </div>
                    <div style={styles.gridValue}>
                      {count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}