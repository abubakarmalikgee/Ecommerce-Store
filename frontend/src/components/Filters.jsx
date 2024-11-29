import { FaChevronDown } from "react-icons/fa";

const Filters = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <form className="space-y-6">
        {/* Availability Filter */}
        <div className="border-b border-gray-300 pb-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-800">
              <span>Availability</span>
              <FaChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="availability"
                  value="in-stock"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span>In stock</span>
              </label>
            </div>
          </details>
        </div>

        {/* Price Filter */}
        <div className="border-b border-gray-300 pb-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-800">
              <span>Price</span>
              <FaChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-2 space-y-4">
              <span className="text-sm text-gray-600">
                The highest price is $562.50
              </span>
              <div className="flex items-center space-x-2">
                <div>
                  <label className="block text-sm text-gray-600">Min</label>
                  <input
                    type="number"
                    name="price-min"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Max</label>
                  <input
                    type="number"
                    name="price-max"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="562.50"
                  />
                </div>
              </div>
            </div>
          </details>
        </div>

        {/* Brand Filter */}
        <div className="border-b border-gray-300 pb-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-800">
              <span>Brand</span>
              <FaChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-2">
              <ul className="space-y-2">
                {["Golden Eyes", "Low Five", "Milkman", "Munchkin"].map(
                  (brand, index) => (
                    <li key={index}>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="brand"
                          value={brand}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <span>{brand}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>
          </details>
        </div>

        {/* Color Filter */}
        <div>
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer font-medium text-gray-800">
              <span>Color</span>
              <FaChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-2">
              <ul className="grid grid-cols-3 gap-2">
                {[
                  "Black",
                  "Blue",
                  "Brown",
                  "Gray",
                  "Green",
                  "Navy",
                  "Orange",
                  "Pink",
                  "Yellow",
                ].map((color, index) => (
                  <li key={index}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="color"
                        value={color}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <span>{color}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </form>
    </div>
  );
};

export default Filters;
