import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
    return (
        <Link to="/trips" className="category-card">
            <div className={`category-icon tone-${category.tone}`}>{category.icon}</div>
            <h3 className="category-title">{category.title}</h3>
            <p className="category-desc">{category.description}</p>
            <p className="category-level">{category.level}</p>
        </Link>
    );
}
