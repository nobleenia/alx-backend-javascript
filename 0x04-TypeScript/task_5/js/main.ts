// Define interfaces with a brand to uniquely identify them
interface MajorCredits {
  credits: number;
  _majorBrand: void;  // Unique brand property for MajorCredits
}

interface MinorCredits {
  credits: number;
  _minorBrand: void;  // Unique brand property for MinorCredits
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _majorBrand: undefined };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _minorBrand: undefined };
}
