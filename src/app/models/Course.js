const mongoose = require('mongoose');
const slugify = require('slugify');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, unique: true }
}, { 
    timestamps: true 
});

// timestamps : tự tạo createAt & updateAt
// unique : khi tạo slug thì không cho phép tạo 2 slag giống nhau

Course.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true, strict: true });
    next();
});

Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});
// overrideMethods : thực hiện ghi đè những methods

module.exports = mongoose.model('Course', Course);
