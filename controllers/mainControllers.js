const db = require('../config/db');

exports.getEntites = async (req,res,next)=>{
     try {
    // Query to fetch all entities
    const [rows] = await db.query('SELECT * FROM entities_table');
    
    // Respond with the data
    res.status(200).json({
      success: true,
      data: rows
    });
  } catch (error) {
    // Handle any errors
    console.error('Error fetching entities:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch entities',
      error: error.message
    });
  }
}

exports.getMembers = async (req,res,next)=>{
    try {
        // Query to fetch all entities
        const [rows] = await db.query('SELECT * FROM members_table');
        
        // Respond with the data
        res.status(200).json({
          success: true,
          data: rows
        });
      } catch (error) {
        // Handle any errors
        console.error('Error fetching entities:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to fetch entities',
          error: error.message
        });
      }
}

exports.getEntitesMembers = async (req,res,next)=>{
    try {
        // Query to fetch all entities
        const [rows] = await db.query('SELECT * FROM entities_members_table');
        
        // Respond with the data
        res.status(200).json({
          success: true,
          data: rows
        });
      } catch (error) {
        // Handle any errors
        console.error('Error fetching entities:', error);
        res.status(500).json({
          success: false,
          message: 'Failed to fetch entities',
          error: error.message
        });
      }
}