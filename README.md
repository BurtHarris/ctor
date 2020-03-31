# CTOR - CBOR in Text
Capable Text Object Representation - CBOR parallel text representation based on YAML

The Concise Binary Object Representation (CBOR), as defined in RFC 7049, is a data format whose design goals include the possibility of extremely small code size, fairly small message size, and extensibility without the need for version negotiation.

## Goals:
 1. Full round-trip preservation CBOR features 
 2. A superset of JSON
 3. YAML like, except where this conflicts with CBOR concepts

## Differences from YAML

While CTOR is expected to be very similar to YAML (YAML ain't markup language), a few of CBOR's features need subtle differences from YAMLs goals have been identified.   CTOR will have the same concrete syntax as YAML, yet differ in semantic rules, as described below:

### base64 Blobs (CBOR major type 2)

One of the primary distinguishing features of CBOR is that it can store binary data in a compact form.  CTOR permits the use of compact base64 representation of such binary data by reserving the equals sign (=) as an indicator character.    Thus a CTOR document containing:

    =AQIDBA==

is a base64 textual representation for the 4-byte sequence of values 1, 2, 3, 4.  Quotes may be used to disambiguate a text string which begins with an equals sign from binary data, or the YAML tag prefix '! ' can be used

### CTOR Tags are numbers  

CBOR tags are limited to positive integer values, with a typical IANA registry defining the meaning of each tag.  In a CTOR document, any CBOR tag may be represented using the '!' character concatenated by a decimal number.  These tag number *should* correspond to values listed in the CBOR tag registry, but this specific label format may be used regardless of the CBOR tag's registration.  For example, CBOR tag number 


A CBOR object may be labeled with more than one tag.  YAML allows at most a single tag on a value.   This discrepancy is the main motivation for defining CTOR to be YAML-like rather than an application of YAML, the semantics differ, but only slightly.  

CBOR tags are limited to positive integer values, with a typical IANA registry defining the meaning of each tag.  In a CTOR document, any CBOR tag may be represented using the '!' character concatenated by a decimal number.  These number should correspond to values listed in the CBOR tag registry: 

### Directives

CTOR document, with their different semantics, don't use the %YAML directive.   The YAML %TAG directive may also be deprecated, with a potential replacement being the use of the CURIE term %PREFIX 

